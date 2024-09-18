/*
 *
Make iframe automatically adjust height according to the contents without using scrollbar
http://stackoverflow.com/questions/9975810/ddg#9976309
 *
 */

 <script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
  }
</script>

/*
<iframe src="..." frameborder="0" scrolling="no" onload="resizeIframe(this)" />
*/
