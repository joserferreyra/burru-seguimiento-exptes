
window.jsPDF = window.jspdf.jsPDF;

var quill;


window.onload = (e) => {
    var toolbarOptions = [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image"],
        ["clean"],                                       // remove formatting button
    ];

    quill = new Quill('#editor', {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
    });
    
    quill.focus();
};

function handlePDFbtn() {
    const html = quill.root.innerHTML; // Get editor content

    console.log(html)

    let doc = new jsPDF('A4');

    doc.html(document.getElementById('editor'), {
        callback: function (doc) {
            doc.save();
        }
    });
}


btn.addEventListener("click", () => {
    const html = quill.root.innerHTML; // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
        .set({
            margin: 1,
            filename: 'demo.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 3, // A mayor escala, mejores gráficos, pero más peso
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: 'portrait' // landscape o portrait
            }
        })
        .from(html)
        .save()
        .catch(err => console.log(err));
});
