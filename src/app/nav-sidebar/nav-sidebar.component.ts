import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css']
})
export class NavSidebarComponent {
  @Input() activePage: string = 'dashboard';
  @Output() pageChange = new EventEmitter<string>();

  onPageChange(page: string) {
    this.pageChange.emit(page);
  }
}