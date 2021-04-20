#DICCIONARIO

pk = {
        "name": "Pikachu",
        "type": "Electric",
        "weak": "Ground",
}

print(pk)

#Mostrar atributo especifico
print("El tipo es: ", pk["type"])

#Obtener valor específico
print("La debilidad es: ", pk.get("weak"))

#Mostrar todos los valores
for v in pk:
        print(v)
        print(pk[v])