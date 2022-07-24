const { default: axios } = require('axios');
const qs = require('qs');
const URL = 'https://api.0x.org/swap/v1/price?';
const basePair = 'USDC';



// get 0x best price token pair
exports.getDefaultPrices = async (req, res) => {
    
    if (!req.body) {
      return res.status(400).send({
        message: "Token Value cannot be empty!",
      });
    }
  
    const token = req.query.token;

    const params = {
        buyToken: basePair,
        sellToken: token,
        sellAmount: 0.05 * Math.pow(10, 18).toString(), // Always denominated in wei
      }

      let response;

        //Get Default Quote
        let getDefaultQuote = async () => {
        try {
            console.log("Default Quote");
            response = await axios.get(`${URL}${qs.stringify(params)}`);
        
        } catch (err) {
            console.error(err)
        }
        console.log("Default Quote");
        console.log("%O",response.data);
        console.log("%O",response.data.sources);
        await res.send(response);

        }
        res.send(getDefaultQuote);
        
    
  };