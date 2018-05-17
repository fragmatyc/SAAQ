/*
	Si vous n'avez pas VS -> https://dotnetfiddle.net/
	Exercice : 
		1. Modifier la classe Moteur pour ajouter une méthode FaireLePlein() qui change la valeur de ResteEncoreEssence pour true
		2. Modifier la classe Voiture pour permettre aussi de faire le plein!
		3. Faire le plein dans le Main() de la classe Program avant l'appel à Demarrer()
		4. Exécutez!
*/
using System;

namespace Poo
{
    public class Program
    {
        public static void Main(string[] argz)
        {
            Voiture voiture = new Voiture();
            voiture.Demarrer();
        }
    }

    public class Moteur
    {
        private bool ResteEncoreEssence { get; set; }

        public void Demarrer()
        {
            if (ResteEncoreEssence)
            {
                Console.WriteLine("Vrouuuuuummmmmmm");
            }
            else
            {
                Console.WriteLine("*** teuf teuf teuf teuf ***");
            }

        }
    }

    public class Voiture
    {
        private Moteur Moteur { get; set; }

        public Voiture()
        {
            Moteur = new Moteur();
        }

        public void Demarrer()
        {
            Moteur.Demarrer();
        }
    }
}
