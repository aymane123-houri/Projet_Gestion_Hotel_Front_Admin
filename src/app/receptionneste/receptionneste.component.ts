import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-receptionneste',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './receptionneste.component.html',
  styleUrl: './receptionneste.component.css'
})
export class ReceptionnesteComponent implements OnInit, AfterViewInit {
  receptionnistes = [
    {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      password: 'password123',
      telephone: '0123456789',
      cni: 'AB123456',
      role: 'Receptionniste'
    },
    {
      id: 2,
      nom: 'Smith',
      prenom: 'Jane',
      email: 'jane.smith@example.com',
      password: 'password456',
      telephone: '0987654321',
      cni: 'CD789012',
      role: 'Receptionniste'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Pas de modification nécessaire dans ngOnInit
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

  deleteReceptionniste(receptionniste: any) {
    // Implémentation pour supprimer un réceptionniste
    alert('Réceptionniste supprimé : ' + receptionniste.id);
  }

  selectReceptionniste(receptionniste: any) {
    // Implémentation pour sélectionner un réceptionniste à modifier
    alert('Réceptionniste sélectionné pour modification : ' + receptionniste.id);
  }

  reloadPage(route: string) {
    this.router.navigateByUrl(route).then(() => {
      window.location.reload(); // Recharge la page
    });
  }

}
