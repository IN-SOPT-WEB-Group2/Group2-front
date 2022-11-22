import React from 'react';
import styled from 'styled-components';

export default function Calendar() {
  return (
    <CalendarWrapper>
      <CalendarContainer>
        <thead>
          <tr className="day-title">
            <th className="mon">월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th className="sat">토</th>
            <th className="sun">일</th>
          </tr>
        </thead>
        <tbody>
          <tr className="week">
            <td className="monday"></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr className="week">
            <td className="monday">7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr className="week">
            <td className="monday">14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr className="week">
            <td className="monday">21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
          </tr>
          <tr className="week">
            <td className="monday">28</td>
            <td>29</td>
            <td>30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </CalendarContainer>
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  width: 100%;
  border-radius: 0.3125rem;
  box-shadow: 0px 0px 1.25rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  height: 20.4375rem;
  font-size: 0.8125rem;
  font-weight: 500;
  text-align: right;
  padding: 0.4375rem 0.6875rem;
`;

const CalendarContainer = styled.table`
  width: 100%;
  height: 100%;
  thead {
    width: 100%;
    padding: 0.4375rem 0.6875rem 0.25rem 0.75rem;
    color: ${({ theme }) => theme.colors.black};
  }

  tbody {
    color: ${({ theme }) => theme.colors.gray2};
    padding: 0 0.625rem 0.4375rem 0.6875rem;
  }

  tr:not(:last-child) {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray3};
  }

  td {
    padding: 0.0625rem 0.1875rem;
    width: 3.5625rem;
  }

  td:not(.monday) {
    cursor: pointer;
  }

  .day-title {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.background};
    padding-bottom: 0.25rem;
    margin: 0 auto;
  }

  .day-title th {
    width: 2.625rem;
    text-align: center;
    line-height: 135%;
    padding: 0.25rem 0;
  }

  .mon {
    color: ${({ theme }) => theme.colors.gray2};
  }

  .sat {
    color: ${({ theme }) => theme.colors.blue};
  }

  .sun {
    color: ${({ theme }) => theme.colors.red};
  }

  .monday {
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`;
