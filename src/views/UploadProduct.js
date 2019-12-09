import React from 'react';
import MainNav from '../components/MainNav/index';
import InputForm from '../components/InputForm/index'

const UploadProduct = () => {
  return(
    <div style={{background: 'rgb(223,226,235)', minHeight: '870px'}}>
      <MainNav />
      <div className = 'container' style={{background: 'rgb(255,255,255)'}}>
        <h4>Add New Item</h4>
        <hr style={{padding: '0', margin: '0'}}/>
        {/* <input type = 'file' /> */}
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width:'700px'}}>
            <div style = {{display: 'flex'}}> 
              <InputForm 
                inputType = 'select'
                labelText = 'Item Name'
                placeholder="Item Name"
                id = "firstName"
                autoComplete="off"
                name = 'firstname'
                //   value = {this.state.firstName}
                //   onChange = {this.handleChange}
              />
              <InputForm 
                inputType = 'text'
                labelText = 'Brand'
                placeholder="Brand"
                id = "firstName"
                autoComplete="off"
                name = 'firstname'
                //   value = {this.state.firstName}
                //   onChange = {this.handleChange}
              />
            </div>
            <div style = {{display: 'flex'}}>
              <InputForm 
                inputType = 'text'
                labelText = 'Original Price'
                placeholder="Original Price"
                id = "firstName"
                autoComplete="off"
                name = 'firstname'
                //   value = {this.state.firstName}
                //   onChange = {this.handleChange}
              />
              <InputForm 
                inputType = 'number'
                labelText = 'Selling Price'
                placeholder="Selling Price"
                id = "firstName"
                autoComplete="off"
                name = 'firstname'
                //   value = {this.state.firstName}
                //   onChange = {this.handleChange}
              />
            </div>
            <select className = 'form-control'>
              <option>Electonics</option>
              <option>Cloths</option>
            </select>
            <textarea 
              inputType = 'text-area'
              className = 'form-control'
              labelText = 'Item Description'
              placeholder="Item Description"
              id = "firstName"
              autoComplete="off"
              name = 'firstname'
            //   value = {this.state.firstName}
            //   onChange = {this.handleChange}
            />
            <InputForm 
              inputType = 'text'
              labelText = 'First Name'
              placeholder="First Name"
              id = "firstName"
              autoComplete="off"
              name = 'firstname'
            //   value = {this.state.firstName}
            //   onChange = {this.handleChange}
            />
            <InputForm 
              inputType = 'text'
              labelText = 'First Name'
              placeholder="First Name"
              id = "firstName"
              autoComplete="off"
              name = 'firstname'
            //   value = {this.state.firstName}
            //   onChange = {this.handleChange}
            />
            <InputForm 
              inputType = 'text'
              labelText = 'First Name'
              placeholder="First Name"
              id = "firstName"
              autoComplete="off"
              name = 'firstname'
            //   value = {this.state.firstName}
            //   onChange = {this.handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadProduct;
