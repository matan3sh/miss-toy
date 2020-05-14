import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveToy } from '../../store/actions/ToysActions';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class ToysAdd extends Component {
  state = {
    name: '',
    price: '',
    type: '',
    inStock: '',
    img: '',
    createdAt: Date.now(),
  };

  onChange = (e) => {
    let { name, value } = e.target;
    value = e.target.name === 'price' ? parseInt(value) : value;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.saveToy(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        <form
          noValidate
          autoComplete='off'
          className='text-center'
          style={{ width: '100%' }}
          onSubmit={this.onSubmit}
        >
          <div className='my-4 card'>
            <div className='grid-2'>
              <div className='text-center'>
                <img
                  src={this.state.img}
                  alt='Toy-Thumb'
                  className='toy-img-edit'
                />
                <TextField
                  id='filled-name'
                  label='Image Url'
                  name='img'
                  value={this.state.img}
                  onChange={this.onChange}
                  variant='filled'
                  style={{ padding: '15px 0' }}
                />
              </div>
              <div className='my-3'>
                <TextField
                  id='filled-name'
                  label='Name'
                  name='name'
                  value={this.state.name}
                  onChange={this.onChange}
                  variant='filled'
                  style={{ marginBottom: '15px', padding: '15px 0' }}
                />
                <br />
                <TextField
                  id='filled-name'
                  label='Price'
                  name='price'
                  value={this.state.price}
                  onChange={this.onChange}
                  variant='filled'
                  style={{ marginBottom: '15px', padding: '15px 0' }}
                />
                <br />
                <FormControl style={{ minWidth: '120px' }}>
                  <InputLabel id='demo-simple-select-label'>Type</InputLabel>
                  <Select
                    value={this.state.type}
                    name='type'
                    onChange={this.onChange}
                    style={{ paddingRight: '20px' }}
                  >
                    <MenuItem value='Funny'>Funny</MenuItem>
                    <MenuItem value='Adult'>Adult</MenuItem>
                    <MenuItem value='Educational'>Educational</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{ marginLeft: '20px', minWidth: '120px' }}>
                  <InputLabel id='demo-simple-select-label'>
                    Available
                  </InputLabel>
                  <Select
                    value={this.state.inStock}
                    name='inStock'
                    onChange={this.onChange}
                    style={{ paddingRight: '50px' }}
                  >
                    <MenuItem value={true}>In Stock</MenuItem>
                    <MenuItem value={false}>Out Of Stock</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <input
                  type='submit'
                  value='Add'
                  className='btn btn-primary'
                  onClick={this.onSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toy: state.toysApp.toy,
  };
};

const mapDispatchToProps = {
  saveToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToysAdd);
