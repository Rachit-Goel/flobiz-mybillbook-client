import React from "react";
import styled from "styled-components";
import { useState } from "react";
import searchIcon from "../assets/icn_search 1.svg";
import ItemStorage from "../utils/itemStorage";
import ItemsNav from "../components/ItemsNav";

const Container = styled.div`
  display: flex;
  background-color: white;
  height: 100%;
`;
const Itemlist = styled.div`
  flex-grow: 2;
  background-color: #f1f3f3;
  /* background-color: #6976d9; */
  /* padding: 0.5em 2em; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* height: 400px; */
  border: 1px solid #d9d9d9;
  h4 {
    border-bottom: 1px solid #d9d9d9;
    margin: 0;
    padding: 1.25em 1.5em;
    background-color: white;
  }
`;
const ItemsListContainer = styled.div`
  /* margin-top: -1.3em; */
  width: 96.75%;
  padding: 1em 1em;
  justify-content: center;
  background-color: #f1f3f3;
`;
const SearchContainer = styled.div`
  display: flex;
  img {
    /* display: block; */
    background-color: white;
    position: absolute;
    margin-left: 10px;
    margin-top: 8px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 50px;
  h1 {
  color: #3d3d3d;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  padding: 10px;
  text-align: center;
}
`;
const Label = styled.label`
    color: gray;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
`;
const Input = styled.input`
    border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;
const InputDate = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
  padding: 7px;
  width: 100%;
`;
const TableItems = styled.table`
  border: 1px solid #d9d9d9;
  width: 100%;
  height: 100%;
  margin-top: 1em;

  border-collapse: collapse;

  th {
    border-bottom: 1px solid #d9d9d9;
    height: 3em;
    font-size: small;
    font-weight: 500;
  }

  td {
    text-align: center;
    background-color: white;
  }
  td,
  th {
    /* border: 1px solid #ddd; */
    padding: 8px;
  }
  td {
    border-bottom: 1px solid #d9d9d9;
    /* padding: 1em; */
  }
`;
const Itemcreate = styled.div`
  flex-grow: 1;
  /* background-color: aqua; */
  box-sizing: border-box;
  /* height: 400px; */
  border: 1px solid #d9d9d9;
  h4 {
    border-bottom: 1px solid #d9d9d9;
    margin: 0;
    padding: 1.25em 1.5em;
  }
`;
const CreateItemContainer = styled.div`
  h3 {
    background-color: #ececec;
    padding: 0.5em 1em;
  }
`;
const ItemNameCode = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  padding: 1em 1em;
  width: 90%;
  Label {
    flex-grow: 1;
    margin-right: 10px;
    /* width: 50%; */
  }
`;
const SaveItemButton = styled.div`
  display: flex;
  width: 90%;
  padding: 1em;
`;
const SubmitInput = styled.input`
  background-color: #6976d9;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 20px 0px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;
const NodataIcon = styled.div`
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-left: 300px;
  /* display: flex; */
`;
const Select = styled.select`
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
    width: 100%;
`;


export default function Items() {
  const { storeItems, itemsData } = ItemStorage();
  const [selected, setSelected] = useState({});
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    sprice: "",
    pprice: "",
    munit: "pcs",
    sdate: "",
  });

  console.log(itemsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(Object.keys(selected).length === 0 && selected.constructor === Object)
    ) {
      const newItems = itemsData.filter((item) => selected !== item);
      storeItems([...newItems, formData]);
    }
    else {
      if (itemsData) {
        const newItems = [...itemsData, formData];
        storeItems(newItems);
      }
      else {
        storeItems([formData]);
      }
    }
    setFormData({});
    setSelected({});
    window.location.reload(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const editItem = (item) => {
    setSelected(item);
    setFormData(item);
  };

  const removeItem = (itemToBeDeleted) => {
    storeItems(itemsData.filter((item) => itemToBeDeleted !== item));
    setSelected({});
  };


  function sortTable(n) {
    // console.log("hi")
    var table;
    table = document.getElementById("table");
    var i, x, y, count = 0;
    var switching = true;

    // Order is set as ascending
    var direction = "ascending";

    // Run loop until no switching is needed
    while (switching) {
      switching = false;
      var rows = table.rows;

      //Loop to go through all rows
      for (i = 1; i < (rows.length - 1); i++) {
        var Switch = false;

        // Fetch 2 elements that need to be compared
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        // Check the direction of order
        if (direction === "ascending") {

          // Check if 2 rows need to be switched
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If yes, mark Switch as needed and break loop
            Switch = true;
            break;
          }
        } else if (direction === "descending") {

          // Check direction
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If yes, mark Switch as needed and break loop
            Switch = true;
            break;
          }
        }
      }
      if (Switch) {
        // Function to switch rows and mark switch as completed
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;

        // Increase count for each switch
        count++;
      } else {
        // Run while loop again for descending order
        if (count === 0 && direction === "ascending") {
          direction = "descending";
          switching = true;
        }
      }
    }
  }

  function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  return (
    <>
      <ItemsNav />
      <Container>
        <Itemlist>
          <h4>Items</h4>
          <ItemsListContainer>
            <SearchContainer>
              <img src={searchIcon} alt="icon" />
              {/* <InputSearch> */}
              <Input id="search" placeholder={"Search Items"}
                style={{ paddingLeft: "40px", width: "max-content" }}
                onKeyUp={()=>{search()}}
              />
              {/* </InputSearch> */}
            </SearchContainer>
            <TableItems
            id="table"
            >
              <thead>
                <tr>
                  <th>
                   <div style={{display: "flex", flexDirection: "row"}}>
                      ITEM NAME
                    <div onClick={() => {sortTable(0)}} style={{ marginLeft: "4px" }}>
                      <i class="fa fa-sort" style={{ fontSize: "14px" }}>
                      </i>
                    </div>
                   </div>
                  
                    
                  </th>
                  <th>ITEM CODE</th>
                  <th>SELLING PRICE</th>
                  <th>PURCHASE PRICE</th>
                  <th>UNIT</th>
                  <th>DATE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {itemsData && itemsData.length > 0 ?
                  (
                    itemsData.map((item, key) => {
                      return (
                        <>
                          <tr
                            key={key}
                            onClick={() => {
                              editItem(item);
                            }}
                          >
                            <td>{item.itemName}</td>
                            <td>{item.itemCode}</td>
                            <td>{item.sprice}</td>
                            <td>{item.pprice}</td>
                            <td>{item.munit}</td>
                            <td>{item.sdate}</td>
                            <td>
                              <button
                                onClick={() => removeItem(item)}
                                style={{ color: "red" }}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <></>
                  )}
              </tbody>
            </TableItems>
            {itemsData && itemsData.length < 1 && (
              <NodataIcon>
                <p>You do not have any data to display</p>
              </NodataIcon>
            )}
          </ItemsListContainer>
        </Itemlist>

        <Itemcreate>
          <h4>Create/Edit Items</h4>
          <CreateItemContainer>
            <Form onSubmit={handleSubmit}>
              <ItemNameCode>
                <Label>
                  <p>Item Name*</p>
                  <Input
                    required
                    type="text"
                    name="itemName"
                    value={formData?.itemName}
                    placeholder="Enter Item Name"
                    onChange={handleChange}
                  />
                </Label>
                <Label>
                  <p>Item Code</p>
                  <Input
                    required
                    value={formData?.itemCode}
                    type="text"
                    name="itemCode"
                    placeholder="Enter Item Code"
                    onChange={handleChange}
                  />
                </Label>
              </ItemNameCode>

              <h3>Stock & Pricing details(Optional)</h3>

              <ItemNameCode>
                <Label>
                  <p>Sales Price</p>
                  <Input
                    type="text"
                    name="sprice"
                    value={formData?.sprice}
                    placeholder="₹ 0"
                    onChange={handleChange}
                  />
                </Label>
                <Label>
                  <p>Purchase Price</p>
                  <Input
                    type="text"
                    name="pprice"
                    value={formData?.pprice}
                    placeholder="₹ 0"
                    onChange={handleChange}
                  />
                </Label>
              </ItemNameCode>

              <ItemNameCode>
                <Label>
                  <p>Measuring UNIT</p>
                  <Select
                    name="munit"
                    value={formData?.munit}
                    placeholder="Select Unit"
                    onChange={handleChange}
                  >
                    <option value="pcs">pcs</option>
                    <option value="boxes">boxes</option>
                    <option value="gms">gms</option>
                    <option value="kgs">kgs</option>
                    <option value="lts">lts</option>
                  </Select>
                </Label>
                <Label>
                  <p>Opening Stock Date</p>
                  <InputDate
                    type="date"
                    name="sdate"
                    value={formData?.sdate || ""}
                    // placeholder="Select Date"
                    onChange={handleChange}
                  />
                </Label>
              </ItemNameCode>

              <SaveItemButton>
                <SubmitInput type="submit" value={"Save"} />
              </SaveItemButton>
            </Form>
          </CreateItemContainer>
        </Itemcreate>
      </Container>
    </>
  );
}
