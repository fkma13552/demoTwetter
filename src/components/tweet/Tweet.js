import React, {useState} from 'react';
import './Tweet.css';


function Tweet(props) {

    const important = props.important;
    const liked = props.liked;

    let classNames = "app-list-item d-flex justify-content-between";

    if(important){
        classNames += " important";
    }

    if(liked){
        classNames += " like";
    }

    return(
        <div className={classNames}>
            <span className="app-list-item-label" onClick={props.onToggleLike}>
                {props.label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm" type="button" onClick={props.onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm" type="button" onClick={props.onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}
export default Tweet;