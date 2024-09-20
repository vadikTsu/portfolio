import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
  //
  // ,animations: [
  //   trigger('dragState', [
  //     state('dragging', style({
  //       transform: 'scale(1.1)',
  //       backgroundColor: '#ff9a00',
  //       boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
  //     })),
  //     state('dropped', style({
  //       transform: 'scale(1)',
  //       backgroundColor: '#ffc10d',
  //       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  //     })),
  //     transition('* => dragging', [
  //       animate('0.3s ease')
  //     ]),
  //     transition('dragging => dropped', [
  //       animate('0.3s ease')
  //     ])
  //   ])
  // ]
})
export class CustomComponent implements OnInit {

  // @ViewChild('imgMagic') imgMagic!: ElementRef<HTMLDivElement>;
  //
  // width: number = 200;
  // height: number = 150;
  // isResizing: boolean = false;
  //
  // onResizeStart(event: MouseEvent, boxElement: HTMLElement) {
  //   event.preventDefault();
  //   this.isResizing = true;
  //
  //   const startX = event.clientX;
  //   const startY = event.clientY;
  //   const startWidth = boxElement.offsetWidth;
  //   const startHeight = boxElement.offsetHeight;
  //
  //   const onMouseMove = (moveEvent: MouseEvent) => {
  //     if (this.isResizing) {
  //       const newWidth = startWidth + (moveEvent.clientX - startX);
  //       const newHeight = startHeight + (moveEvent.clientY - startY);
  //
  //       document.getElementById("jj").style.width = String(startWidth + (moveEvent.clientX - startX)> 150 ? startWidth + (moveEvent.clientX - startX) : 150)+'px';
  //       document.getElementById("jj").style.height =   String(startHeight + (moveEvent.clientY - startY) > 100 ? startHeight + (moveEvent.clientY - startY) : 100)+'px'
  //
  //       this.height = newHeight > 100 ? newHeight : 100; // Minimum height: 100px
  //     }
  //   };
  //
  //   const onMouseUp = () => {
  //     this.isResizing = false;
  //
  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);
  //   };
  //
  //   document.addEventListener('mousemove', onMouseMove);
  //   document.addEventListener('mouseup', onMouseUp);
  // }

  // protected tasks: string[] = ["Task1", "Task2", "Task3"];
  //
  // onDragStart(event: DragEvent, index: number) {
  //   event.dataTransfer.setData('text', String(index));
  // }
  //
  // onDragOver(event: any) {
  //   event.preventDefault()
  // }
  //
  // onDragDrop(event: DragEvent, dropIndex: number) {
  //   event.preventDefault();
  //   const draggedTaskIndex = event.dataTransfer?.getData('text/plain');
  //   if (draggedTaskIndex !==null) {
  //     const draggedTask = this.tasks[Number(draggedTaskIndex)];
  //     this.tasks.splice(Number(draggedTaskIndex), 1);
  //     this.tasks.splice(dropIndex, 0, draggedTask);
  //   }
  // }


  ngOnInit() {
    const input = document.querySelector("input");
    const preview = document.getElementById("imgList");
    input.addEventListener("change", updateImageDisplay)

    function updateImageDisplay() {
      const curFiles = input.files;
      if (curFiles.length === 0) {
        const para = document.createElement("p");
        para.textContent = "No files currently selected for upload";
        preview.appendChild(para);
      } else {
        // const list = document.createElement("ol");
        // preview.appendChild(list);

        const filesArray = Array.from(curFiles);

        for (const file of filesArray) {
          // const listItem = document.createElement("li");
          // const para = document.createElement("p");

            const image = document.createElement("img");
            image.height = 100;
            image.src = URL.createObjectURL(file);
            image.alt = image.title = file.name;

            // listItem.appendChild(image);
            // listItem.appendChild(para);


          preview.appendChild(image);
        }
      }

    }

  }
}
