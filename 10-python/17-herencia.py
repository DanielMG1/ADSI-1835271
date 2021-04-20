#Herencia

class Pokemon: 
    def __init__ (self, name):
        self.name = name
    def showname(self):
        print('El Pokemon es:', self.name)

class Fire(Pokemon):
    pass
class Water(Pokemon):
    pass

ch = Fire('Charmander')
sq = Water('Squaterl')
ch.showname()
sq.showname()
