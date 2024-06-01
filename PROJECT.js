/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create an array to hold your NFT's
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, owner, Created_date) {
    // Create NFT object with metadata
    let nft = {
        name: name,
        owner: owner,
        Created_date: Created_date
    };
    // Add the new NFT to the array
    nfts.push(nft);
    console.log(`Minted: ${name}`);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    // Iterate over each NFT and print its metadata
    for (let i = 0; i < nfts.length; i++) {
        console.log("");
        console.log("Name: " + nfts[i].name);
        console.log("Owner: " + nfts[i].owner);
        console.log("Created Date: " + nfts[i].Created_date);
        console.log("*********************************");
    }
}

// Print the total number of NFTs we have minted to the console
function TotalSupply() {
    return nfts.length;
}

// Call your functions below this line

// Mint a few NFTs
mintNFT("Cars", "Rohit", "01-01-2001");
mintNFT("Bikes", "Pankaj", "02-02-2002");
mintNFT("Toys", "Jai", "03-03-2003");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total NFTs that are minted: " + TotalSupply());
