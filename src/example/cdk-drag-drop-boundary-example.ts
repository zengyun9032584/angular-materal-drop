import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlatformModule } from '@angular/cdk/platform';
import { NgFor } from '@angular/common';

/**
 * @title Drag&Drop boundary
 */
@Component({
  selector: 'cdk-drag-drop-boundary-example',
  templateUrl: 'cdk-drag-drop-boundary-example.html',
  styleUrls: ['cdk-drag-drop-boundary-example.css'],
  standalone: true,
  imports: [CdkDrag, FormsModule, PlatformModule, NgFor, CdkDropList],
})
export class CdkDragDropBoundaryExample {
  public list: any[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.list.push(i);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
