

  window.addEventListener('load',function () {
      // Находим все input'ы с атрибутом id
      const fields = document.querySelectorAll('input[id], select[id]');

      fields.forEach(field => {
        const id = field.id;

        // Загрузка значения из localStorage
        const saved = localStorage.getItem(id);
        if (saved !== null) {
          field.value = saved;
        }

        // Сохранение при вводе
        const eventName = field.togName === 'SELECT'?'change' : 'input';
        field.addEventListener(eventName, () => {
          localStorage.setItem(id, field.value);
        });
      });
    });



    async function downloadPDF() {
    const table = document.getElementById("tankTable");

    const canvas = await html2canvas(table);
    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 20;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    pdf.save("Rozliczenie tankowań.pdf");
  }




/*window.onload = function () {
      // Находим все input'ы с атрибутом id
      const inputs = document.querySelectorAll('input[id]');

      inputs.forEach(input => {
        const id = input.id;

        // Загрузка значения из localStorage
        const saved = localStorage.getItem(id);
        if (saved !== null) {
          input.value = saved;
        }

        // Сохранение при вводе
        input.addEventListener('input', () => {
          localStorage.setItem(id, input.value);
        });
      });
    };*/
