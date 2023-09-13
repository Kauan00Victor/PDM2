
# SETS
# setMeuConjunto = set()
# setMeuConjunto.add('a')
# setMeuConjunto.add('d')
# setMeuConjunto.add('b')
# setMeuConjunto.add(2)

# print (setMeuConjunto)

# SETS
# setMeuConjunto = set()
# setMeuConjunto.add('a')
# setMeuConjunto.add('d')
# setMeuConjunto.add('a')

# print (setMeuConjunto)

# SETS E LISTAS
# lisMinhaLista = [1,1,1,1,1,2,2,21,4,51,23,1,2,3,5,8]

# print (lisMinhaLista)
# print (set(lisMinhaLista))

# ARQUIVOS - CRIAR E GRAVAR
# f = open("meuArquivo.txt","x")
# f = open("meuArquivo.txt","a")
# f.write("Minha primeira linha.")
# f.write("Minha segunda linha.\nTerceira linha")
# f.close()

# ARQUIVOS - LER
# f = open("meuArquivo.txt","r")
# arqMeuArquivo = f.read()
# print(arqMeuArquivo)
# f.close()

# EXERCÍCIOS

# lisMinhaLista=["Carro","Abajur","Moto","Barco","Ferro de passar roupa","2","Barco","moto"]
# listaOrdenada = sorted(lisMinhaLista)
# print(set(listaOrdenada))

# a = 1
# b = 2
# c = 3
# print (a == b) #False
# print (a == b and a == a) #False
# print (a == b or a == a) #True
# print (a == a or a == a and a==c) #True
# print (a == a and a == a or a==c) #True
# print (a == a and a == c or a==a) #True
# print (a == c and (a == c or a==a)) #False


# a = 1
# b = 2
# c = 3
# if (a == b):
#     print("Primeiro teste é verdadeiro.")
# if (a == b and a == a):
#     print("Segundo teste é verdadeiro.")
# if (a == b or a == a):
#     print("Terceiro teste é verdadeiro.")
# if (a == a or a ==a and a ==c):
#     print("Quarto teste é verdadeiro.")
# if (a == a and a == a or a == c):
#     print("Quinto teste é verdadeiro.")
# if (a == a and a == c or a == a):
#     print("Sexto teste é verdadeiro.")
# if (a == c and (a == c or a ==a)):
#     print("Sétimo teste é verdadeiro.")
# print("Saindo do IF.")

# a = 1
# b = 2
# c = 3
# if (a == b):
#   print("oi")
# print("Primeiro teste é verdadeiro.")
# if (a == b and a == a):
#     print("Segundo teste é verdadeiro.")
# if (a == b or a == a):
#     print("Terceiro teste é verdadeiro.")
# if (a == a or a ==a and a ==c):
#     print("Quarto teste é verdadeiro.")
# if (a == a and a == a or a == c):
#     print("Quinto teste é verdadeiro.")
# if (a == a and a == c or a == a):
#     print("Sexto teste é verdadeiro.")
# if (a == c and (a == c or a ==a)):
#     print("Sétimo teste é verdadeiro.")
# print("Saindo do IF.")

# a = 1
# b = 2
# c = 3
# if (a == b):
#     print("Primeiro teste é verdadeiro.")
# if (a == b and a == a):
#     print("Segundo teste é verdadeiro.")
# if (a == b or a == a):
#     print("Terceiro teste é verdadeiro.")
# elif (a == a or a ==a and a ==c):
#     print("Quarto teste é verdadeiro.")
# if (a == a and a == a or a == c):
#     print("Quinto teste é verdadeiro.")
# if (a == a and a == c or a == a):
#     print("Sexto teste é verdadeiro.")
# if (a == c and (a == c or a ==a)):
#     print("Sétimo teste é verdadeiro.")
# print("Saindo do IF.")

# dados1 = input("Insira o primeiro dado: ")

# dados2 = input("Insira o segundo dado: ")

# if (dados1 == dados2):
#     print("Os dados são iguais")
# else:
#     print("Os dados são diferentes")

# FOR
# lstMinhaLista = [1,2,3,4,5,6,7,8,9,10]

# for numero in lstMinhaLista:
#     if (numero % 2 == 0):
#         print (f'O número {numero} é par.')
#     else:
#         print (f'O número {numero} é ímpar.')

# FOR
# lstMinhaLista = [(1,2),(3,4),(4,5),(5,6),(7,8)]
# print (len(lstMinhaLista))

# for item in lstMinhaLista:
#     print (item)

# LIST E ZIP
# lstMinhaLista1 = [1,2,3]
# lstMinhaLista2 = ['a','b','c']
# lstMinhaLista3 = [100,200,300]

# lstMinhaLista4 = list(zip(lstMinhaLista1,lstMinhaLista2, lstMinhaLista3))

# print(lstMinhaLista4)

# IN
# lstMinhaLista = [1,2,3]

# print(1 in lstMinhaLista)

# MAX E MIN
# lstMinhaLista1 = [1,2,3,4,5]
# print(max(lstMinhaLista1))
# print(min(lstMinhaLista1))

# N = int(input("Quantos números você deseja inserir?: "))
# numeros = []
# contador = 0
# while contador < N:
#     numero = float(input(f"Digite o {contador + 1}º número: "))
#     numeros.append(numero)
#     contador += 1
# x = 0

# for item in numeros:
#     if (item % 2 == 0):
#         x += item
   
# print("A soma dos numeros pares é:", x)
        