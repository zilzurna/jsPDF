'use strict'
/* global describe, it, expect, jsPDF, comparePdf */
/**
 * Standard spec tests
 *
 * These tests return the datauristring so that reference files can be generated.
 * We compare the exact output.
 */

describe('Standard Text', () => {
  it('should load', () => {
    // assertions here]
    expect(typeof jsPDF).toBe('function')
  })
  it('should generate blank page', () => {
    const doc = jsPDF()
    comparePdf(doc.output(), 'blank.pdf', 'text')
  })
  it('should allow text insertion', () => {
    const doc = jsPDF()
    doc.text(10, 10, 'This is a test!')
    comparePdf(doc.output(), 'standard.pdf', 'text')
  })
  it('should allow text insertion at an angle', () => {
    const doc = jsPDF()
    doc.text(20, 20, 'This is a test!', null, 20)
    comparePdf(doc.output(), 'angle.pdf', 'text')
  })
  it('should render different font faces', () => {
    const doc = jsPDF()

    doc.text(20, 20, 'This is the default font.')

    doc.setFont('courier')
    doc.setFontType('normal')
    doc.text(20, 30, 'This is courier normal.')

    doc.setFont('times')
    doc.setFontType('italic')
    doc.text(20, 40, 'This is times italic.')

    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.text(20, 50, 'This is helvetica bold.')

    doc.setFont('courier')
    doc.setFontType('bolditalic')
    doc.text(20, 60, 'This is courier bolditalic.')

    comparePdf(doc.output(), 'font-faces.pdf', 'text')
  })
  it('should support multiple pages', () => {
    const doc = jsPDF()
    doc.text(20, 20, 'Hello world!')
    doc.text(20, 30, 'This is client-side JavaScript, pumping out a PDF.')
    doc.addPage()
    doc.text(20, 20, 'Do you like that?')
    comparePdf(doc.output(), 'two-page.pdf', 'text')
  })
  it('should support different size fonts', () => {
    const doc = jsPDF()
    doc.setFontSize(22)
    doc.text(20, 20, 'This is a title')

    doc.setFontSize(16)
    doc.text(20, 30, 'This is some normal sized text underneath.')
    comparePdf(doc.output(), 'different-sizes.pdf', 'text')
  })
  it('should support multiline text', () => {
    const doc = jsPDF()
    doc.text(20, 20, `This is a line
break`)
    comparePdf(doc.output(), 'line-break.pdf', 'text')
  })

  it('should support multiline text', () => {
    const doc = jsPDF()
    doc.text('Stroke on', 20, 20, { stroke: true })
    doc.text('Stroke on', 20, 40, { stroke: true })
    doc.text('Stroke off', 20, 60, { stroke: false })
    doc.text('Stroke on', 20, 80, { stroke: true })

    comparePdf(doc.output(), 'stroke.pdf', 'text')
  })

  it('should support multiline text', () => {
    const doc = jsPDF()
    doc.text('Stroke on', 20, 20, { stroke: true })
    doc.text('Stroke on', 20, 40, { stroke: true })
    doc.text('Stroke off', 20, 60, { stroke: false })
    doc.text('Stroke on', 20, 80, { stroke: true })

    comparePdf(doc.output(), 'stroke.pdf', 'text')
  })

  // @TODO: Implement passing color as a name
  it('should display two red lines of text', () => {
    const doc = jsPDF()
    doc.setTextColor('#FF0000')
    doc.text('Red on', 20, 20)
    doc.setTextColor(255, 0, 0)
    doc.text('Red on', 20, 40)

    comparePdf(doc.output(), 'color.pdf', 'text')
  })

  // @TODO: Document alignment
  it('should center align text', () => {
    const doc = jsPDF()
    doc.setFont("times");
    doc.setFontType("normal");
    doc.text(105, 80, 'This is centred text.', null, null, 'center');
    doc.text(105, 90, 'And a little bit more underneath it.', null, null, 'center');
    doc.text(200, 100, 'This is right aligned text', null, null, 'right');
    doc.text(200, 110, 'And some more', null, null, 'right');
    doc.text(20, 120, 'Back to left');

    comparePdf(doc.output(), 'alignment.pdf', 'text')
  })
})
