const AccordionComponent = a => {
  const label = a.hasTitle ? SectionLabelComponent(a) : '';
  const body =
    a.layout === 'rows' ? RowsAccordionComponent(a) : CardListComponent(a);
  return `<div class="block" id="${a.id}">${label}${body}</div>`;
};
