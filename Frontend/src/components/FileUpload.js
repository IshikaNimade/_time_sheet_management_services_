import React from 'react';
import axios from 'axios';

class FileUpload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    submit(){
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.log(this.state.selectedFile);
        let url = "http://127.0.0.1:8000/docs#/default/create_task_sheet_upload_task_sheet__post";

        axios.post(url, data, {
        })
        .then(res => {
            console.log(res);
            alert(res);
        })

        .catch(error =>{
        console.log(error);
        })
    }

    render(){
        return(
                <div className="row">
                            <div className="col-md-10">
                                    <input type="file" className="form-control" name="upload_file" value={this.state.selectedFile} onChange={this.handleInputChange} />
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Upload</button>
                            </div>
                </div>
        )
    }
}

export default FileUpload;