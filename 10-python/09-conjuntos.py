#CONJUNTOS

oss = {"Windows", "Linux", "MacOSX"}
print(oss)

#Imprimir Valores
for os in oss:
    print(os)

#Adicionar un valor
oss.add("iOS")
print(oss)

#Actualizar valores del conjunto
oss.update(["Android","Windos", "Phone"])
print(oss)