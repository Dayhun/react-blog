import React from 'react'
import './wrapbox.css'
import './view.css'
import Author from '../author/Author';
import Category from '../category/Category';
import ViewTitle from './ViewTitle';
import ViewContents from './ViewContents';
import BackButton from '../button/BackButton';
import ModifyButton from '../button/ModifyButton';
import DeleteButton from '../button/DeleteButton';

export default function View() {
    return (
        <div class="view">
            <div class="max-width">
                <section class="wrap-box">
                    <div class="inner">
                        <Author />
                        <Category />
                        <ViewTitle />
                        <hr />
                        <ViewContents />
                        <div class="btn-group">
                            <ModifyButton />
                            <DeleteButton />
                        </div>
                        <BackButton />
                    </div>
                </section>
            </div>
        </div>
    )
}
