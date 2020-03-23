import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  url = '';
  base64textString;
  constructor() { }

  ngOnInit() {
  }

  handleInputChange(e) {
    const pattern = /image-*/;
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (file) {
      const reader = new FileReader();

      if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
      }
      reader.readAsDataURL(file); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.base64textString = btoa(event.target.result);
      }
    }
  }
  handleDrop(e){
    e.preventDefault();
    console.log(e)
    this.handleInputChange(e)
  }
  public delete(){
    this.url = null;
  }

}
