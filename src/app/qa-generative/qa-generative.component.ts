import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SkeltonComponent } from '../skelton/skelton.component';
import { GeminiService } from '../service/gemini.service';
@Component({
  selector: 'app-qa-generative',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, SkeltonComponent],
  
  templateUrl: './qa-generative.component.html',
  styleUrls: ['./qa-generative.component.css']
})
export class QaGenerativeComponent {
  title = 'gemini-inte';

  prompt: string = '';

  geminiService: GeminiService = inject(GeminiService);

  loading: boolean = false;

  chatHistory: any[] = [];
  constructor() {
    this.geminiService.getMessageHistory().subscribe((res) => {
      if(res) {
        this.chatHistory.push(res);
      }
    })
  }

  async sendData() {
    if(this.prompt && !this.loading) {
      this.loading = true;
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
      this.loading = false;
    }
  }

  formatText(text: string) {
    const result = text.replaceAll('*', '');
    return result;
  }
}
