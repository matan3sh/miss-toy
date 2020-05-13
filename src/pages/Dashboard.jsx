import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadToys, removeToy } from '../store/actions/ToysActions';
import { Spinner } from '../components/Layout/Spinner';
import ToysSearch from '../components/Toys/ToysSearch';
import { DashboardList } from '../components/Dashboard/DashboardList';

class Dashboard extends Component {
  componentDidMount() {
    setTimeout(() => this.props.loadToys(), 1000);
  }

  onDelete = (toyId) => {
    this.props.removeToy(toyId);
  };

  render() {
    const { toys, filtered } = this.props;
    return (
      <>
        {!toys.length ? (
          <Spinner />
        ) : (
          <div className='grid-1'>
            <ToysSearch />
            {filtered !== null ? (
              <DashboardList toys={filtered} onDelete={this.onDelete} />
            ) : (
              <DashboardList toys={toys} onDelete={this.onDelete} />
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toys: state.toysApp.toys,
    filtered: state.toysApp.filtered,
  };
};

const mapDispatchToProps = {
  loadToys,
  removeToy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
