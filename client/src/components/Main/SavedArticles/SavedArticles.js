import React from "react";
import "./SavedArticles.css";

const SavedArticles = props => (
    <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header"><strong>Saved Articles</strong></div>
                <div className="card-body" id="saved-articles">
                </div>
            </div>
        </div>
    </div>
)

export default SavedArticles;