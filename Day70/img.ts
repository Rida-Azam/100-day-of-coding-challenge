//HTMLImageElement


const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";

if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}