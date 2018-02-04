package src.main.java.main.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import src.main.java.main.Dao.PostedDaoImpl;

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


}


