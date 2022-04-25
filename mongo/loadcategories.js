db = db.getSiblingDB('trubbi_test')
db.categories_test.drop()
db.categories_test.insertMany(
    [
    {name: "Cercanos"},
    { name: "Arte y Cultura"},
    {name: "Familia y Niños"},
    {name: "Música"},
    {name: "Artes Escénicas"},
    { name: "Deportes"},
    {name: "Ferias y Conferencias"},
    {name: "Otros Eventos"}
    ]
)