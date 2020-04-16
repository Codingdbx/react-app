import React from "react";

export default class Home extends React.Component {

    render() {

        return(
            <div>
                <form>
                    <div className="form-group">
                        <label className="input-id"> 选择文件 </label>
                        <input id="input-id" type="file" />
                    </div>
                </form>
            </div>
        );
    }

}