import React from 'react';
import { signOut } from '../../Firebase/auth';

import NavLink from '../NavLink'

export default (props) => {
    const { history } = props
    return (
        <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="">HOme</a></li>
                <li class="uk-parent"><a href=""></a>Settings</li>
                <li><a href="">HOme</a></li>
                <li class="uk-active"><a href="">HOme</a></li>
                <li class="uk-parent"><a href=""></a>Settings</li>
                <li><a href="">HOme</a></li>
                <li class="uk-active"><a href="">HOme</a></li>
                <li class="uk-parent"><a href=""></a>Settings</li>
                <li><a href="">HOme</a></li>
                <li class="uk-active"><a href="">HOme</a></li>
                <li class="uk-parent"><a href=""></a>Settings</li>
                <li><a href="">HOme</a></li>
                <li class="uk-active"><a href="">HOme</a></li>
                <li class="uk-parent"><a href=""></a>Settings</li>
                <li><a href="">HOme</a></li>
                <li class="uk-active"><a href="">HOme</a></li>
                <li class="uk-parent"><a href=""></a>Settings</li>
                <li><a href="">HOme</a></li>
                <li class="uk-active"><a href="">HOme</a></li>
                <li class="uk-parent"><a href=""></a>Settings</li>
                <li><a href="">HOme</a></li>
            </ul>
        </div>
    </nav>
    )
}