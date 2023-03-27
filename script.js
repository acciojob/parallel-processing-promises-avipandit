const images = [
  { url: 'https://picsum.photos/id/237/200/300' },
  { url: 'https://picsum.photos/id/238/200/300' },
  { url: 'https://picsum.photos/id/239/200/300' },
];

const downloadImages = () => {
  const promises = images.map((image) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
      img.src = image.url;
    })
  );

  Promise.all(promises)
    .then((images) => {
      const output = document.getElementById('output');
      images.forEach((image) => {
        output.appendChild(image);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', downloadImages);
