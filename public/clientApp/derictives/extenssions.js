Array.prototype.remove = function(item)
{
    var index = this.indexOf(item);
    if(index!=-1)
    {
        return this.splice(index,1);
    }
    return false;
}