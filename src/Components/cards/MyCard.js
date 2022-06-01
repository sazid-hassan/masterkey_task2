import React from 'react';
import "./MyCard.css";

const MyCard = () => {
    return (
        <div style={{ display: "inline-flex" }}>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-1">
                            <h3>Ionic Native</h3>
                            <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-2">
                            <h3>UI Components</h3>
                            <p>Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
                                of mobile UI components, ready to go.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-3">
                            <h3>Theming</h3>
                            <p>Learn how to easily customize and modify your app’s design to fit your
                                brand across all mobile platform styles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCard