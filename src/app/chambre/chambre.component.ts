import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


declare var $: any;
@Component({
  selector: 'app-chambre',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './chambre.component.html',
  styleUrl: './chambre.component.css'
})
export class ChambreComponent implements OnInit, AfterViewInit {
  chambres = [
    {
      id: 1,
      numero: '101A',
      type_chambre: 'Simple',
      prix: 100,
      disponible: true
    },
    {
      id: 2,
      numero: '102B',
      type_chambre: 'Double',
      prix: 150,
      disponible: false
    },
    {
      id: 3,
      numero: '201C',
      type_chambre: 'Suite',
      prix: 250,
      disponible: true
    },
    {
      id: 4,
      numero: '202D',
      type_chambre: 'Simple',
      prix: 120,
      disponible: false
    },
    {
      id: 5,
      numero: '203E',
      type_chambre: 'Double',
      prix: 180,
      disponible: true
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Pas de modifications spécifiques dans ngOnInit
  }

  ngAfterViewInit(): void {
    $('#example1').DataTable({
      paging: true, // Activer la pagination
      lengthChange: true, // Permet à l'utilisateur de changer le nombre d'éléments par page
      pageLength: 3, // Nombre d'éléments par page par défaut
      searching: true, // Activer la fonctionnalité de recherche
      ordering: true, // Activer le tri
      info: true, // Afficher le texte d'information en bas de la table
      autoWidth: false // Désactiver l'ajustement automatique de la largeur des colonnes
    }); // Initialisation de DataTables sur le tableau
  }

  deleteChambre(chambre: any) {
    // Implémentation pour supprimer une chambre
    alert('Chambre supprimée : ' + chambre.numero);
  }

  selectChambre(chambre: any) {
    // Implémentation pour sélectionner une chambre à modifier
    alert('Chambre sélectionnée pour modification : ' + chambre.numero);
  }




  reloadPage(route: string) {
    this.router.navigateByUrl(route).then(() => {
      window.location.reload(); // Recharge la page
    });
  }
}
