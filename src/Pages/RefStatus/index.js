import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { Page, Body, Button } from '../../Components'

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import MButton from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';


import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';


import AddRefModal from '../../Modals'

// import { addReferee } from './actions'
import * as actions from './actions'

const styles = {
    card: {
        minWidth: 275,
    }
}

const createRef = ({ firstName, lastName, grade, writtenTest, writtenTestScore, certYear, fitness, fitnessDate, fitnessCity, gameLog, reCert, upgradeClinic }) => ({
    firstName: "Wade", lastName: "Beall", grade: "A", writtenTest: 1, writtenTestScore: 72,
    certYear: 2018, fitness: 1, fitnessDate: "02/12/2018",
    fitnessCity: "Oklahoma City", gameLog: 1, reCert: 1, upgradeClinic: 1
})

const ms = state => ({
    ...state.refSatusState
})


class RefStatus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAddingRef: false,
            columnDefs: [
                // { headerName: "Id", field: "id", checkboxSelection: true },
                { headerName: "Name", field: "name", checkboxSelection: true, pinned: 'left' },
                // { headerName: "First Name", field: "firstname", checkboxSelection: true, pinned: 'left' },
                // { headerName: "Last Name", field: "lastname" },
                { headerName: "Grade", field: "grade", editable: true },
                { headerName: "Written Test", field: "writtenTest", editable: true },
                { headerName: "Written Test Score", field: "writtenTestScore", editable: true },
                { headerName: "Certified Year", field: "certYear", editable: true },
                { headerName: "Fitness", field: "fitness", editable: true },
                { headerName: "Fitness Date", field: "fitnessDate", editable: true },
                { headerName: "Fitness City", field: "fitnessCity", editable: true },
                { headerName: "Game Log", field: "gameLog", editable: true },
                { headerName: "Recert", field: "reCert", editable: true },
                { headerName: "Upgrade Clinic", field: "upgradeClinic", editable: true },
                {
                    headerName: "", field: "action", cellRenderer: "editCellRenderer", editable: true,
                    pinned: 'right', width: 70, type: "actionColumn", cellEditor: "saveRow",
                    cellStyle:()=>({display:'flex', justifyContent:'center',alignItems:'center'})
                }
            ],
            columnTypes: {
                actionColumn: {
                    editable: false,
                }
            },
            components: { editCellRenderer: this.getEditCellRenderer, saveRow: this.getSaveRow },
        }
    }

    componentWillMount() {
        const { addReferee, getReferees } = this.props

        getReferees()
    }

    onGridReady = params => {
        this.gridApi = params.api
    }

    onSave = grid => {

        const { referees, updateReferee } = this.props
        //TODO: prevent edit if update fails - 
        this.gridApi.stopEditing();
        updateReferee(referees[grid.rowIndex])
    }

    onEdit = grid => {
        this.gridApi.startEditingCell({
            rowIndex: grid.rowIndex,
            colKey: "action",
        });
    }

    add = () => {
        this.setState({ isAddingRef: true })
    }

    getEditCellRenderer = grid => {
        return (<MButton size="medium" onClick={() => this.onEdit(grid)} ><EditIcon /></MButton>)
    }

    getSaveRow = grid => {
        return <MButton onClick={() => this.onSave(grid)} style={{color:green[500]}}><SaveIcon /></MButton>
    }

    onRowValueChanged = grid => {
        const { referees, updateReferee } = this.props
        updateReferee(referees[grid.rowIndex])
    }

    render() {

        const { classes, history, referees, addReferee } = this.props;

        return (
            <Page authenticated history={history}>
                <AddRefModal isOpen={this.state.isAddingRef} completion={addReferee} close={() => this.setState({ isAddingRef: false })} />
                <Body>
                    <div style={{ display: 'grid' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                            <Button onClick={this.add} mini variant="fab" aria-label="Add" className={classes.button}>
                                <AddIcon />
                            </Button></div>
                        <Card className={classes.card}>
                            <CardContent style={{ padding: '0px' }}>
                                <div
                                    ag-grid="gridOptions"
                                    className="ag-theme-material"
                                    style={{
                                        height: '400px',
                                        width: '100%'
                                    }}>
                                    <AgGridReact
                                        enableColResize
                                        enableSorting={true}
                                        enableFilter={true}
                                        rowSelection="multiple"
                                        editType='fullRow'
                                        rowHeight='50'
                                        animateRows={true}
                                        enableCellChangeFlash={true}
                                        suppressClickEdit="true"
                                        columnDefs={this.state.columnDefs}
                                        frameworkComponents={this.state.components}
                                        onGridReady={this.onGridReady}
                                        onRowValueChanged={this.onRowValueChanged}
                                        rowData={referees}>
                                    </AgGridReact>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Body>
            </Page>
        )
    }

}

export default connect(ms, actions)(withStyles(styles)(RefStatus));