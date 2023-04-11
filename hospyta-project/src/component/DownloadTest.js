import React from 'react';

function DownloadLink({ fileUrl, fileName }) {
  function handleClick(event) {
    event.preventDefault();
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 0);
      });
  }

  return (
    <a href='public/images/policy.pdf' onClick={handleClick}>
      Download {fileName.split('.').pop()}
    </a>
  );
}

export default DownloadLink  