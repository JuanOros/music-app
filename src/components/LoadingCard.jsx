import React, { Component } from 'react';

export default class LoadingCard extends Component {
  render() {
    return (
      <div className="flex flex-col rounded shadow-md w-32 my-5 mx-3 animate-pulse h-48">
        <div className="h-28 rounded-t bg-gray-500"></div>
        <div className="flex-1 px-4 py-4 space-y-4 bg-gray-400">
          <div className="w-full h-6 rounded bg-gray-500"></div>
          <div className="w-full h-6 rounded bg-gray-500"></div>
        </div>
      </div>
    );
  }
}