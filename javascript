// script.js

// Dados para os gráficos
const labels = ['Frutas', 'Vegetais', 'Alimentos Processados', 'Água'];
const dataValues = [40, 30, 10, 20];

// Configuração do Gráfico de Barras
const barConfig = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Porcentagem (%)',
            data: dataValues,
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(54, 162, 235, 0.6)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Frequência de Consumo (%)' }
        }
    }
};

// Configuração do Gráfico de Pizza
const pieConfig = {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: dataValues,
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(54, 162, 235, 0.6)',
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Distribuição de Hábitos (%)' }
        }
    }
};

// Renderização dos Gráficos
window.onload = function() {
    const barCtx = document.getElementById('barChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');

    new Chart(barCtx, barConfig);
    new Chart(pieCtx, pieConfig);
};