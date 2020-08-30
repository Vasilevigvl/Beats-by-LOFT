const openItem  = item => {
  const container = item.closest(".team__item");
  const contentBlock  = container.find(".team__content");
  const textBlock = contentBlock.find(".team__inner");
  const reqHeight = textBlock.height();

  contentBlock.height(reqHeight);

}

const closeEveryItem  = container =>  {
  const items = container.find('.team__content');
  items.height(0);


}

$('.team__title').click(e =>{
  const $this = $(e.currentTarget);
  const container=  $this.closest('.team');


  closeEveryItem(container);
  openItem($this);

});