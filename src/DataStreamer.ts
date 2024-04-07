export interface Order {
  price: number;
  size: number;
}

export interface ServerRespond {
  stock: string;
  top_bid: Order;
  top_ask: Order;
  timestamp: Date;
}

class DataStreamer {
  static API_URL = "http://localhost:8080/query?id=1";

  /**
   * Send a request to the datafeed server and execute the callback function on success.
   * @param callback A callback function that takes an array of ServerRespond objects as its argument.
   */
  // static async getData(
  //   callback: (data: ServerRespond[]) => void
  // ): Promise<void> {
  //   try {
  //     const response = await fetch(DataStreamer.API_URL);
  //     if (!response.ok) {
  //       throw new Error("Request failed");
  //     }
  //     const data = await response.json();
  //     callback(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     alert("Request failed");
  //   }
  // }

  static getData = async (
    callback: (data: ServerRespond[]) => void
  ): Promise<void> => {
    try {
      const response = await fetch(DataStreamer.API_URL);
      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();
      callback(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Request failed");
    }
  };
}

export default DataStreamer;
