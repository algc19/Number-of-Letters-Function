import math

mi = 1
interval = 10000
cadenas = []

baseDatos = [{'num':1, 'nom':"uno"},{'num':2, 'nom':"dos"},{'num':3, 'nom':"tres"},{'num':4, 'nom':"cuatro"},{'num':5, 'nom':"cinco"},{'num':6, 'nom':"seis"},{'num':7, 'nom':"siete"},{'num':8, 'nom':"ocho"},{'num':9, 'nom':"nueve"},{'num':10, 'nom':"diez"},{'num':11, 'nom':"once"},{'num':12, 'nom':"doce"},{'num':13, 'nom':"trece"},{'num':14, 'nom':"catorce"},{'num':15, 'nom':"quince"},{'num':20, 'nom':"veinte"},{'num':30, 'nom':"treinta"},{'num':40, 'nom':"cuarenta"},{'num':50, 'nom':"cincuenta"},{'num':60, 'nom':"sesenta"},{'num':70, 'nom':"setenta"},{'num':80, 'nom':"ochenta"},{'num':90, 'nom':"noventa"},{'num':100, 'nom':"cien"},{'num':500, 'nom':"quinientos"},{'num':600, 'nom':"seiscientos"},{'num':700, 'nom':"setecientos"},{'num':800, 'nom':"ochocientos"},{'num':900, 'nom':"novecientos"},{'num':1000, 'nom':"mil"}]

def Nombre(i):
    nombre = ""
    while (i > 0):
        if (i > 15 and i < 20):
            nombre += "dieci"
            i -= 10
        elif (i > 20 and i < 30):
            nombre += "veinti"
            i -= 20
        elif (i > 30 and i < 100):
            j = i / 10
            j = math.floor(j)
            j *= 10
            l = 0
            while l < len(baseDatos):
                if (baseDatos[l].get('num') == j):
                    nombre += baseDatos[l].get('nom')
                l += 1
            nombre += "y"
            i -= j
        elif (i > 100 and i < 200):
            nombre += "ciento"
            i -= 100
        elif (i > 199 and i < 500):
            j = i / 100
            j = math.floor(j)
            nombre += Nombre(j)
            nombre += "cientos"
            i -= (j) * 100
        elif (i > 499 and i < 1000):
            j = i / 100
            j = math.floor(j)
            j *= 100
            l = 0
            while l < len(baseDatos):
                if (baseDatos[l].get('num') == j):
                    nombre += baseDatos[l].get('nom')
                l += 1
            i -= j
        elif (i > 999 and i < 2000):
            nombre += "mil"
            i -= 1000
        elif (i > 1999 and i < 1000000):
        #    leng = len(str(i))
            j = i / (1000)
            j = math.floor(j)
            nombre += Nombre(j)
            nombre += "mil"
            i -= 1000 * j
        else:
            l = 0
            while l < len(baseDatos):
                if (baseDatos[l].get('num') == i):
                    nombre += baseDatos[l].get('nom')
                l += 1
            i -= i
    return nombre

def Run(mi):
    cadenas = []
    for i in range(mi, interval + mi, 1):
        global I
        I = i
        global cadenas
        cadenas.append({'num':i})
        sec = ""
        Recursivo(i, sec)
    CalcLargestChain()

def Recursivo(i, sec):
    if (i == 5 or i == 4 or i == 6):
        sec += str(i)
        value = len(sec.split(", "))
        for n in range(0, len(cadenas), 1):
            if cadenas[n].get('num') == I:
                cadenas[n]['leng'] = value
        return
    else:
        sec += str(i)
        sec += ", "
        Recursivo(len(Nombre(i)), sec)

def CalcLargestChain():
    mx = 0
    mn = 10
    for index in range(len(cadenas)):
        if cadenas[index].get('leng') > mx:
            mx = cadenas[index].get('leng')
        elif cadenas[index].get('leng') < mn:
            mn = cadenas[index].get('leng')
    print("Max " + str(mx) + ",  Min " + str(mn))
  # cadenas({len:m}).get()

Run(mi)
