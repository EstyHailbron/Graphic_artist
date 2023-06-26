import { keyframes } from '@angular/animations';
import { Element } from '@angular/compiler';
import { ElementRef } from '@angular/core';
import { faMouse } from '@fortawesome/free-solid-svg-icons';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });
});
