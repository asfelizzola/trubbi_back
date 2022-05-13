db = db.getSiblingDB('trubbi_test')
db.categories_test.drop()
db.categories_test.insertMany(
    [
    {name: "ARTE_Y_CULTURA"},
    {name: "ARTES_ESCENICAS"},
    {name: "DEPORTE"},
    {name: "FAMILIA_Y_NIÑOS"},
    {name: "FERIAS_Y_CONFERENCIAS"},
    {name: "MUSICA"},
    {name: "OTROS"},
    {name: "CERCANOS"}
    ]
)