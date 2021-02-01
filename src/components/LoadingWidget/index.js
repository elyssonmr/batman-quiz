import React from 'react';
import Widget from '../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>Carregando...</h3>
      </Widget.Header>
      <Widget.Content>
        <p>Carregando suas perguntas</p>
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
