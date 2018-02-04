package src.main.java.main.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Timestamp;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import src.main.java.main.Dao.PostedDaoImpl;
import src.main.java.main.entity.Posted;

@Controller
public class HomeController {

	@Autowired
	public PostedDaoImpl postedDao ;


	@RequestMapping("api/Home/createSNSTable")
	public @ResponseBody boolean createSNSTable() throws SQLException{

		boolean result = postedDao.createPosted();
		System.out.println("createSNSTable");

		return result;

	}

	@RequestMapping("api/Home/Post")
	public @ResponseBody boolean Post(HttpServletRequest request) throws SQLException{

		String postedIdSt = request.getParameter("postedId");
		if("".equals(postedIdSt)||postedIdSt==null) {
			postedIdSt = "-1";
		}
		System.out.println(postedIdSt);
		int postedId = Integer.parseInt(postedIdSt);
		String user = request.getParameter("user");
		String sentence = request.getParameter("sentence");
		String title  = request.getParameter("title");
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String picture = request.getParameter("picture");
		if("".equals(picture)||picture==null) {
			picture = "";
		}
	try(Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/SNS","root","worksap")){

//
		Posted post = new Posted(postedId,user,title,sentence,timestamp,picture);
		boolean result = postedDao.setPosted(post,conn);
		return result;
	}




	}





}


