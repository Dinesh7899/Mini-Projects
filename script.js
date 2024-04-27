document.addEventListener("DOMContentLoaded", function () {
    const imageSources = [
        "./assets/img1.webp",
        "./assets/img2.webp",
        "./assets/img3.webp",
        "./assets/img4.webp",
        "./assets/img5.webp"
    ];

    // Copy text from one set of elements to another
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
        const copyElements = item.querySelectorAll(".info, .name, .tag");

        copyElements.forEach((div) => {
            const copy = div.querySelector("p");
            if (copy) {
                const duplicateCopy = document.createElement("p");
                duplicateCopy.textContent = copy.textContent;
                div.appendChild(duplicateCopy);
            }
        });
    });

    // Function to append images and animate clip paths
    const appendImages = (src) => {
        const preview1 = document.querySelector(".preview-img-1");
        const preview2 = document.querySelector(".preview-img-2"); // Corrected

        // Create img elements and set their source and style
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        
        img1.src = src;
        img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        
        img2.src = src;
        img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"; // Corrected

        // Append images to their respective preview containers
        preview1.appendChild(img1);
        preview2.appendChild(img2);

        // Animate the clip paths
        gsap.to([img1, img2], {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.out",
            onComplete: function () {
                removeExtraImages(preview1);
                removeExtraImages(preview2);
            },
        });
    };

    // Function to remove extra images if there are more than 10 children
    function removeExtraImages(container) {
        while (container.children.length > 10) {
            container.removeChild(container.firstChild);
        }
    }

    // Event listeners for menu items
    menuItems.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            mouseOverAnimation(item);
            appendImages(imageSources[index]);
        });

        item.addEventListener("mouseout", () => {
            mouseOutAnimation(item);
        });
    });

    // Mouseover animation function
    const mouseOverAnimation = (elem) => {
        gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
            top: "-100%",
            duration: 0.3,
        });
        gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
            top: "0%",
            duration: 0.3,
        });
    };

    // Mouseout animation function
    const mouseOutAnimation = (elem) => {
        gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
            top: "0%",
            duration: 0.3,
        });
        gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
            top: "100%",
            duration: 0.3,
        });
    };

    // Event listener for mouseout of the menu
    document.querySelector(".menu").addEventListener("mouseout", function () {
        gsap.to(".preview-img img", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.out",
        });
    });

    // Mousemove event listener to animate the preview position
    document.addEventListener("mousemove", function (e) {
        const preview = document.querySelector(".preview");

        gsap.to(preview, {
            x: e.clientX,
            y: e.clientY,
            duration: 1,
            ease: "power3.out",
        });
    });
});


// document.addEventListener("DOMContentaded", function () {
//     const imageSources = [
//         "./assets/img1.webp",
//         "./assets/img2.webp",
//         "./assets/img3.webp",
//         "./assets/img4.webp",
//         "./assets/img5.webp"
//     ];

//     const menuItems = document.querySelectorAll(".menu-item");

//     menuItems.forEach((item) => {
//         const copyElements = item.querySelectorAll(".info, .name, .tag");

//         copyElements.forEach((div) => {
//             const copy = div.querySelector("p");

//             if (copy) {
//                 const duplicateCopy = document.createElement("p");
//                 duplicateCopy.textContent = copy.textContent;
//                 div.appendChild(duplicateCopy);
//             }
//         });
//     });

//     const appendImages = (src) => {
//         const preview1 = document.querySelector(".preview-img-1");
//         const preview2 = document.querySelector("preview-img-2");

//         const img1 = document.createElement("img");
//         const img2 = document.createElement("img");
        
//         img1.src = src;
//         img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
//         img2.src = src;
//         img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%";

//         preview1.appendChild(img1);
//         preview2.appendChild(img2);

//         gsap.toString([img1, img2], {
//             clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//             duration: 1,
//             ease: "power3.out",
//             onComplete: function () {
//                 removeExtraImages(preview1);
//                 removeExtraImages(preview2);
//             },
//         });
//     };

//     function removeExtraImages(container) {
//         while (container.children.length > 10){
//         container.removeChild(container.firstChild);
//     }
// }

// document.querySelectorAll(".menu-item").forEach((item, index) => {
//     item.addEventListener("mouseover", () => {
//         mouseOverAnimation(item);
//         appendImages(imageSources[index]);
//     });

//     item.addEventListener("mouseout", () => {
//         mouseOutAnimation(item);
//     });
// });

// const mouseOverAnimation = (elem) => {
//     gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
//         top: "-100%",
//         duration: 0.3,
//     });
//     gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
//         top: "0%",
//         duration: 0.3,
//     })
// };

//     const mouseOutAnimation = (elem) => {
//         gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
//             top: "0%",
//             duration: 0.3,
//         });
//         gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
//             top: "100%",
//             duration: 0.3,
//         });
//     };
//      document.querySelector(".menu").addEventListener("mouseout", function () {
//         gsap.to(".preview-img img", {
//             clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//             duration:1,
//             ease: "power3.out",
//         });
//      });

//      document.addEventListener("mousemove", function (e) {
//         const preview = document.querySelector(".preview");

//         gsap.to(preview, {
//             x: e.clientX,
//             y: e.clientY,
//             duration: 1,
//             ease: "power3.out",
//         });
//      });
// });






// document.addEventListener("DOMContentLoaded", function () {
//     // Fixed the spelling error in "DOMContentLoaded"

//     const imageSources = [
//         "./assets/img1.webp",
//         "./assets/img2.webp",
//         "./assets/img3.webp",
//         "./assets/img4.webp",
//         "./assets/img5.webp"
//     ];

//     const menuItems = document.querySelectorAll(".menu-item");

//     menuItems.forEach((item) => {
//         const copyElements = item.querySelectorAll(".info, .name, .tag");

//         copyElements.forEach((div) => {
//             const copy = div.querySelector("p");

//             if (copy) {
//                 const duplicateCopy = document.createElement("p");
//                 duplicateCopy.textContent = copy.textContent;
//                 div.appendChild(duplicateCopy);
//             }
//         });
//     });

//     const appendImages = (src) => {
//         const preview1 = document.querySelector(".preview-img-1");
//         const preview2 = document.querySelector(".preview-img-2");
//         // Corrected the selector for preview2

//         const img1 = document.createElement("img");
//         const img2 = document.createElement("img");

//         img1.src = src;
//         img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
//         img2.src = src;
//         img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
//         // Corrected the clipPath for both img1 and img2

//         preview1.appendChild(img1);
//         preview2.appendChild(img2);

//         // Ensure you import and use a suitable library like GSAP for animations
//         gsap.to([img1, img2], {
//             clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//             duration: 1,
//             ease: "power3.out",
//             onComplete: function () {
//                 removeExtraImages(preview1);
//                 removeExtraImages(preview2);
//             },
//         });
//     };

//     function removeExtraImages(container) {
//         // Corrected function name from relmoveExtraImages to removeExtraImages
//         while (container.children.length > 10) {
//             container.removeChild(container.firstChild);
//         }
//     }

//     menuItems.forEach((item, index) => {
//         item.addEventListener("mouseover", () => {
//             mouseOverAnimation(item);
//             appendImages(imageSources[index]);
//         });

//         item.addEventListener("mouseout", () => {
//             mouseOutAnimation(item);
//         });
//     });

//     const mouseOverAnimation = (elem) => {
//         // Make sure to include necessary imports for the GSAP library
//         gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
//             top: "-100%",
//             duration: 0.3,
//         });
//         gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
//             top: "0%",
//             duration: 0.3,
//         });
//     };

//     const mouseOutAnimation = (elem) => {
//         gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
//             top: "0%",
//             duration: 0.3,
//         });
//         gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
//             top: "100%",
//             duration: 0.3,
//         });
//     };
//      document.querySelector(".menu").addEventListener("mouseout", function () {
//         gsap.to(".preview-img img", {
//             clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//             duration:1,
//             ease: "power3.out",
//         });
//      });

//      document.addEventListener("mousemove", function (e) {
//         const preview = document.querySelector(".preview");

//         gsap.to(preview, {
//             x: e.clientX,
//             y: e.clientY,
//             duration: 1,
//             ease: "power3.out",
//         });
//      });
// });
