import truecallerjs from "truecallerjs";

export async function performLogin(number) {
    try {
        const phoneNumber = number;
        const json_data= await truecallerjs.login(phoneNumber);

        

        if (json_data.status === 1 || json_data.status === 9) {
            // OTP sent successfully
            // Handle the response accordingly
            console.log("OTP sent successfully");
            console.log("Request ID:", json_data.requestId);
            console.log("Token TTL:", json_data.tokenTtl);
            return json_data;
        } else if (json_data.status === 6 || json_data.status === 5) {
            // Verification attempts exceeded
            // Handle the response accordingly
            console.log("Verification attempts exceeded");
            console.log("Status:", json_data.status);
            console.log("Message:", json_data.message);
        } else {
            // Unknown response
            // Handle the response accordingly
            console.log("Unknown response");
            console.log("Status:", json_data.status);
            console.log("Message:", json_data.message);
        }
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

