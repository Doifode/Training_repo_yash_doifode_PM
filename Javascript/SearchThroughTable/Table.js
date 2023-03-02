const searchFunc =()=>{
    const SearchInput =document.getElementById('SearchInput').value.toUpperCase()
    const MyTable = document.getElementById('myTable')
const tr = MyTable.getElementsByTagName('tr')
for(var i=0 ;i<=tr.length;i++){
td = tr[i].getElementsByTagName('td')[0] 
if(td){
   let textValue = td.textContent || td.innerHtml
   if(textValue.toUpperCase().indexOf(SearchInput) > -1){
    tr[i].style.display =""
   }
   else{
      tr[i].style.display = "none"
   }

}
}
}