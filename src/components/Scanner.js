import React from 'react';
import Quagga from 'quagga';

const Scanner = (props) => {

  React.useEffect(() => {
    Quagga.init({
      inputStream: {
        type: "LiveStream",
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment"
        }
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      numOfWorkers: 2,
      decoder: {
        readers: ["ean_reader"]
        // readers: ["code_128_reader"]
      },
      locate: true
    }, function (err) {
      if (err) {
        return console.log(err);
      }
      Quagga.start()
    });
    Quagga.onDetected(_onDetected);
  });
  React.useEffect(()=>{
    Quagga.offDetected(_onDetected);
  },[]);

  const _onDetected = (result) => {
    props.onDetected(result)
  }

  return (
    <div className="viewport" id="interactive" />
  );
};

export default Scanner;
