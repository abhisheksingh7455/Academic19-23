import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const Favourite = ({ saved, favShow, favDel }) => {
    return (
        <div>
            <Chip avatar={<BookmarkBorderIcon />} label={'Saved :'} />
            <ul>
                {saved.length === 0
                    ? 'None, try saving for faster visits! ╰(*°▽°*)╯'
                    : saved.map((v, i) => (
                          <li key={i}>
                              <Chip
                                  avatar={<Avatar>{v.name[0]}</Avatar>}
                                  label={v.name}
                                  variant="outlined"
                                  style={{ marginBottom: 8 }}
                                  onClick={() => favShow(i)}
                                  onDelete={() => favDel(i)}
                              />
                          </li>
                      ))}
                      <h5 class="table2">Change Log</h5>

                      
<table class="table">
<thead style={{ backgroundColor: "grey"}}>
<tr >

<th scope="col" width="5%">S no.</th>
<th scope="col" width="8%">Date</th>
<th scope="col" width="10%">Status</th>
<th scope="col" width="20%">Students</th>
<th scope="col" class="text-end" width="20%"><span>Request</span></th>
</tr>
</thead>
<tbody style={{ backgroundColor: "#968d8d1a" }}>
<tr>

<td>1</td>
<td>25 Dec,21</td>
<td style={{color: "green", backgroundColor: "lightgreen"}}>✅Done</td>
<td>Abhishek Kumar Singh</td>
<td class="text-end">Marks Update</td>
</tr>
<tr>

<td>2</td>
<td>26 Dec,21</td>
<td style={{color: "green", backgroundColor: "lightgreen"}}>✅Done</td>
<td>Kanhaiya Lal Nandan</td>
<td class="text-end">Marks Update</td>
</tr>

</tbody>
</table>
            </ul>
        </div>
    )
}
export default Favourite
