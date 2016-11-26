package junction2016.ufibp.backend.external;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@Service
public class Connector720 {


    private String serverUri = "https://hackathon.720.fi/nodes/ccecc389-73e7-493b-b6bb-1570ad93fd75/measurements";

    private String login = "junction_hackathon@720.fi";
    private String pass = "i<3python";


    private RestTemplate restTemplate = new BasicAuthRestTemplate(login, pass);

    public String getTemp() {

        TemperatureRequest720 req = new TemperatureRequest720();
        req.setAggregate("5m");
        req.setFrom("2016-11-26T14:07:00");
        req.setUntil("2016-11-26T15:07:00");

        String reqUrl = serverUri+"?aggregate="+req.getAggregate()+"&from="+req.getFrom()+"&until="+req.getUntil();

        Map response = restTemplate.getForObject(reqUrl, Map.class, req);


        List data = ((List)((Map)response.get("data")).get("measurements"));
        Double temp = (Double)((Map)((Map)((Map)data.get(data.size()-1)).get("sensors")).get("temperature_celsius")).get("value_avg");

        log.error("TEMP TEMP: {}", temp.toString().substring(0,6));

        return temp.toString().substring(0,6);
    }



}
